import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common'
import { Board } from 'src/app/models/board';
import { Column } from 'src/app/models/column';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent {
  board: Board = new Board(
    'Minhas tarefas', [
      new Column('todo', [ 'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']),
      new Column('doing', ['Lavar a louça', 'Work out']),
      new Column('done', ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'])
    ]
  );
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
