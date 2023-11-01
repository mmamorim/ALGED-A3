
const engine = {
    groups: {},
    queues: {},
    out: "",

    parse(input) {
        //console.log('input', input);
        let doc = []
        let lines = input.split("\n")
        //console.log('lines', lines);
        for (let i in lines) {
            let tokens = lines[i].split(" ")
            //console.log('tokens', tokens);
            doc.push(tokens)
        }
        return doc
    },

    run(doc) {
        //console.log("running doc", doc);
        engine.out = ''
        for (let i in doc) {
            engine.exec(doc[i])
        }
    },

    output(text) {
        engine.out = engine.out + text + "\n"
    },

    exec(line) {
        let command = line[0]
        //console.log("command", command);
        if (command == 'grupo:') {
            engine.execNewGroup(line)
        }
        if (command == 'existe:') {
            let ret = engine.execExists(line)
            //console.log(ret.msg);
            engine.output(ret.msg)
        }
        if (command == 'conhece:') {
            let ret = engine.execKnow(line)
            //console.log(ret.msg);
            engine.output(ret.msg)
        }
        if (command == 'criaFila:') {
            engine.execNewQueue(line)
        }
        if (command == 'chegou:') {
            for (let i = 1; i < line.length; i++) {
                engine.execArrived(['', line[i]])
                //engine.print()
            }
        }
        if (command == 'desiste:') {
            for (let i = 1; i < line.length; i++) {
                engine.execGiveUp(['', line[i]])
                //engine.print()
            }
        }
        if (command == 'atendeFila:') {
            for (let i = 1; i < line.length; i++) {
                engine.execQueueAnswer(['', line[i]])
                //engine.print()
            }
        }
        if (command == 'imprime:') {
            engine.print()
        }
    },

    execNewGroup(line) {
        let newIdx = Object.keys(engine.groups).length + 1
        //console.log("nexIdx", newIdx);
        engine.groups[`Grupo ${newIdx}`] = []
        for (let i = 1; i < line.length; i++) {
            engine.groups[`Grupo ${newIdx}`].push(line[i])
        }
    },

    execExists(line) {
        let name = line[1]
        //console.log("exists", name);
        for (let key in engine.groups) {
            let pos = engine.groups[key].indexOf(name)
            if (pos >= 0) {
                return { exists: true, msg: `[${name}] existe!` }
            }
        }
        return { exists: false, msg: `[${name}] NÃO existe!` }
    },

    execKnow(line) {
        let name1 = line[1]
        let name2 = line[2]
        let ret = engine.execExists(["", name1])
        if (!ret.exists) {
            return { know: false, msg: `[${name1}] NÃO conhece [${name2}]` }
        }
        ret = engine.execExists(["", name2])
        if (!ret.exists) {
            return { know: false, msg: `[${name1}] NÃO conhece [${name2}]` }
        }
        for (let key in engine.groups) {
            let pos1 = engine.groups[key].indexOf(name1)
            let pos2 = engine.groups[key].indexOf(name2)
            if (pos1 >= 0 && pos2 >= 0) {
                return { know: true, msg: `[${name1}] conhece [${name2}]` }
            }
        }
        return { know: false, msg: `[${name1}] NÃO conhece [${name2}]` }
    },

    execNewQueue(line) {
        let newIdx = line[1]
        //console.log("criando fila ", newIdx);
        engine.queues[newIdx] = []
    },

    execQueueAnswer(line) {
        let queueID = line[1]
        //console.log("atendeFila: ", { queueID, queue: engine.queues[queueID] });
        engine.queues[queueID].shift()
    },

    bestQueuePosition(queue, name) {
        let pos = queue.length
        for (let i in queue) {
            let person = queue[i]
            let ret = engine.execKnow(['', name, person])
            //console.log(`ver se [${person}] é amigo de [${name}]`,ret)
            if (ret.know) {
                pos = parseInt(i) + 1
                //console.log(`achei amigo [${person}] na pos `,pos);
            }
        }
        //console.log(`procurando [${name}] em`,{ queue, achou: pos });
        return pos
    },

    execArrived(line) {
        let name = line[1]
        let best = null
        let bestKey = ''
        let bestPos = 0
        let queue = null
        for (let key in engine.queues) {
            queue = engine.queues[key]
            //console.log(`queue: ${key}`, queue);
            if (!best) {
                best = queue
                bestKey = key
                bestPos = engine.bestQueuePosition(queue, name)
                //console.log('pos',bestPos);
            } else {
                let pos = engine.bestQueuePosition(queue, name)
                //console.log('pos',pos);
                if (pos < bestPos || (pos == bestPos && bestPos == queue.length)) {
                    bestPos = pos
                    bestKey = key
                    best = queue
                }
            }
        }
        //console.log(`chegou: ${name}`, { best, bestPos, bestKey });
        if (bestPos < best.length) {
            best.splice(bestPos, 0, name)
        } else {
            best.push(name)
        }
    },

    execGiveUp(line) {
        let name = line[1]
        console.log('desiste: ', name);
        for (let key in engine.queues) {
            let queue = engine.queues[key]
            let pos = queue.indexOf(name)
            //console.log(`procurando [${name}]`, { queue, pos });
            if (pos >= 0) {
                queue.splice(pos, 1)
                break;
            }
        }
    },

    print() {
        for (let key in engine.queues) {
            let queue = engine.queues[key]
            let output = `#${key} [ `
            for (let i = 0; i < queue.length; i++) {
                output = output + queue[i]
                if (i < queue.length - 1) {
                    output = output + ', '
                }
            }
            output = output + ` ]`
            //console.log(output);
            engine.output(output)
        }
    }
}

export default engine