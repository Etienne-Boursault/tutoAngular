import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppareilService {

    appareilsSubject = new Subject<any[]>()

    private appareils = [
        {
            id: 0,
            name: '',
            status: ''
        }
    ];

    constructor(private httpClient: HttpClient) {

    }

    emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice());
    }

    switchOnAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé'
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'éteint';
            this.emitAppareilSubject();
        }
    }

    switchOffOne(i: number) {
        this.appareils[i].status = 'éteint'
        this.emitAppareilSubject();
    }

    getAppareilById(id: number) { 
        return this.appareils.find(
            (s) => {
                return s.id === id;
            }
        );
    }

    addAppareil(name: string, status: string) {
        const appareilObject = {
            id: 0,
            name: '',
            status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }

    saveAppareilsToServer() {
        this.httpClient.put('https://tutoangular-20324-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.appareils)
        .subscribe(
            () => {
                console.log('Enregistrement terminé !');
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );
    }

    getAppareilsFromServer() {
        this.httpClient
        .get<any[]>('https://tutoangular-20324-default-rtdb.europe-west1.firebasedatabase.app/appareils.json')
        .subscribe(
            (response) => {
                this.appareils = response;
                this.emitAppareilSubject();
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        )
    }
}