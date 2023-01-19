interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (salary < 500 && typeof salary === 'number') {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
    if (employee instanceof Director) {
        return true;
    }
    return false;
}

type Subjects = "Math" | "History";

function executeWork(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    if (todayClass === 'History') {
        return 'Teaching History';
    }
}
