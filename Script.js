class Calculator {
    constructor (previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextELement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

 
    clear() {
        this.currentOperand = ""
        this.previousOperand =""
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }
    appendNumber(number) {
        if (number === '.' && this,currentOperand.includes('.')) return  // stops function from excuting further with period key "." to return period key ("."))
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation) {
        if (this.currentOperand === "") return;
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""

    }
    compute() {
        let computation
        const prev = parentFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
            computation = prev / current
            break
            default:
              return;    
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.'))
        const floatNumber = parseFloat(number)
        let integerDisplay
        if (isNaN(integerDisplay)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0})
        }
        if (decimalDigits != null) { 
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) { 
            this.previousOperandTextElement.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}` // Quotation type
        }    
        }
};


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => { 
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()

    })
})

operationButtons.forEach(button => { 
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()

    })
})

equalsButton.forEach(button => { 
    button.addEventListener('click', () => {
        calculator.compute(button.innerText)
        calculator.updateDisplay()

    })
})

allClearButton.forEach(button => { 
    button.addEventListener('click', () => {
        calculator.clear(button.innerText)
        calculator.updateDisplay()

    })
})

deleteButton.forEach(button => { 
    button.addEventListener('click', () => {
        calculator.delete(button.innerText)
        calculator.updateDisplay()

    })
})