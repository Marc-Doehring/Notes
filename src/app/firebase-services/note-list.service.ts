import { Injectable, inject } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { collectionData, Firestore, collection, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteListService {
  trashNotes: Note[] = [];
  normalNotes: Note[] = [];

  item$;
  firestore: Firestore = inject(Firestore);

  constructor() {
    this.item$ = collectionData(this.getNoteshRef());
  }

  getNoteshRef() {
    return collection(this.firestore, 'notes');
  }

  getTrashRef() {
    return collection(this.firestore, 'trash');
  }

  getsingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}