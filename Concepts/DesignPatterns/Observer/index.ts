interface Observer {
    update: (data: any) => void
}

interface Subject {
    subscribe: (observer: Observer) => void,
    unsubscribe: (observer: Observer) => void,
}

class DollarValue implements Subject {
    observers: Observer[] = []

    constructor () {
        const el: HTMLInputElement = document.querySelector('#value')
        el.addEventListener('input', () => {
            this.notify(el.value)
        })
    }

    subscribe (observer: Observer) {
        this.observers.push(observer)
    }

    unsubscribe (observer: Observer) {
        const index = this.observers.findIndex(obs => {
            return obs === observer
        })

        this.observers.splice(index, 1)
    }

    notify (data: any) {
        this.observers.forEach(obs => obs.update(data))
    }
}

class ValueDisplay implements Observer {
    private el: HTMLParagraphElement

    constructor () {
        this.el = document.querySelector('#dollarValue')
    }

    update(data: any) {
        this.el.innerText = `$ ${data}`
    }
}

const value = new DollarValue()
const display = new ValueDisplay()

value.subscribe(display)

setTimeout(() => {
    value.unsubscribe(display)
}, 3000)
