import StudentCard from "./student-card.js";
import StudentService from "./services/student-service.js";


export default class SuperGrid extends HTMLElement{
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

        const dialog = document.getElementById('student-dialog');
        sDialog.addEventListener(('student-edited', event.detail))
    }
    
    style() {
        const style = document.createElement('style');
        style.innerText = `
             .grid{
                border-radius: 8px;
                border: solid 1px #313131;
                padding: 8px;
                display: grid;
                grid-template-coloumns: 1fr 1fr;
                gap: 16px;
                align-items: center;
            }
        `
        this.shadow.appendChild(style);
    }

    render(students) {


        const controlsDiv =document.createElement('div');
        const button = document.createElement('button');
        button.appendChild(document.createTextNode('add'));
        button.addEventListener('click', () => {
            const sDialog = document.getElementById('student-dialog');
            sDialog.addStudent()
        });
        controlsDiv.appendChild(button);
        this.shadow.appendChild(controlsDiv);


        const main = document.createElement('div');
        main.classList.add('grid');
        // main.innerHTML = '';


        for (const student of students) {

            const card = document.createElement('student-card');
            card.setAttribute('selected-student', JSON.stringify(student));
    
            main.appendChild(card);
        }
        this.shadow.appendChild(main);
    }
}

customElements.define('super-grid', SuperGrid);