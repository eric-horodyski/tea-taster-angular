import { Component, OnInit } from '@angular/core';
import { Tea } from '@app/models';
import { selectTeasMatrix } from '@app/store';
import { logout } from '@app/store/actions';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tea',
  templateUrl: './tea.page.html',
  styleUrls: ['./tea.page.scss'],
})
export class TeaPage implements OnInit {
  teas$: Observable<Array<Array<Tea>>>;

  constructor(private navController: NavController, private store: Store) {}

  ngOnInit() {
    this.teas$ = this.store.select(selectTeasMatrix);
  }

  logout() {
    this.store.dispatch(logout());
  }

  showDetailsPage(id: number) {
    this.navController.navigateForward(['tea-details', id]);
  }
}
