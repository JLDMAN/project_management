export interface Briefed {
    projectName: string;
    code: string;
}

export interface Waiting {
    projectName: string;
    code: string;
}

export interface InProgress {
    projectName: string;
    code: string;
}

export interface Done {
    projectName: string;
    code: string;
}

export interface teamDetails {
    userId: any[],
    userIcon: any[];
    userNotifications:any[];
    jobsWaitingToStart: any[];
    jobsStarted: any[];
    jobsCompleted: any[];
}