export interface authDTO {
    name:     string;
    password: string;
}

export interface actDTO  {
    location: number
}

export interface gameDTO {
    id:     string;
    rival:  string;
    date:   Date;
    result: string;
}

export interface startDTO {
    against: string
}