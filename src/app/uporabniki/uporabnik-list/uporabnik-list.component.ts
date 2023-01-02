import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';

import { UporabnikDto } from '../dto/uporabnik.dto';
import { UporabnikService } from '../uporabnik.service';

@Component({
  selector: 'app-vozilo-list',
  templateUrl: './uporabnik-list.component.html',
  styleUrls: ['./uporabnik-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: UporabnikDto[] = [];

  constructor(
    private readonly toastrService: ToastrService,
    private readonly UporabnikService: UporabnikService,
  ) { }

  private handleError(error: HttpErrorResponse) {
    this.toastrService.error(error.message);
  }

  ngOnInit(): void {
    this.onRefreshClick();
  }

  onRefreshClick(viaButton: boolean = false) {
    this.loadData().then(() => {
      if (viaButton)
        this.toastrService.info('Refreshed');
    }).catch(this.handleError.bind(this));
  }

  async loadData() {
    const users = await firstValueFrom(this.UporabnikService.list());
    console.log("USERS")
    console.log(users)
    this.users.splice(0, this.users.length);
    users.forEach((item) => this.users.push(item));
  }
}
