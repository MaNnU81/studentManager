class SuperGrid extends HTMLElement{
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    async fetchStudents() {
        const service = new StudentService();
        await service.loadStudents();
        return service.students;
    }

    async connectedCallback() {
        this.style();
        const students = await this.fetchStudents();
        this.render(students);
    }
    
    style() {
        const style = document.createElement('style');
        style.innerText = `
            
        `
        this.shadow.appendChild(style);
    }

    render(students) {
        const main = document.createElement('div');
        main.innerHTML = '';
        
        for (const student of students) {

            const card = document.createElement('student-card');
            card.setAttribute('selected-student', JSON.stringify(student));
    
            main.appendChild(card);
        }
        this.shadow.appendChild(main);
    }
}

customElements.define('super-grid', SuperGrid);