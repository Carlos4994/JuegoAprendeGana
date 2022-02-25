import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private _firestore: AngularFirestore) { }


  crearPersona(persona: Persona): Promise<any> {
    return this._firestore.collection('persona').add(persona);
  }
}
