export class MemoryOperations {
    constructor() {
        this.current_memory = 0;
    }
    m_plus(number_to_memory) {
        this.current_memory += number_to_memory;
    }
    m_minus(number_to_memory) {
        this.current_memory -= number_to_memory;
    }
    m_reload() {
        return this.current_memory;
    }
    m_clean() {
        this.current_memory = 0;
    }
}