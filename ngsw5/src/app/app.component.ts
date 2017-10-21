import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  registration: PushSubscription;

  constructor(private swUpdate: SwUpdate, private swPush: SwPush) {
    console.debug('before registering for push');
      
    swUpdate.available.subscribe(u => {
      console.debug('update event!', u);

      // Immediately activate pending update
      // if (u.type == 'pending') {
        swUpdate.activateUpdate().then(e => {
          console.debug('updated', e);
          alert("App updated! Reload App!!!");
          // location.reload();
        });
      //}
    });

    swUpdate.activated.subscribe(u => console.debug('activated', u));

    swUpdate.checkForUpdate();



    this.swPush.requestSubscription({
      serverPublicKey: 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE'
    })
    .then(s => {
      console.debug('successfully registered', 'result' + JSON.stringify(s.toJSON()));
      this.registration = s;
    },
    err => {
      console.error('error registering for push', err);
    });

    swPush.messages.subscribe(push => {
      console.debug('received push message', push);
    });


  }

  unregister() {
    this.registration.unsubscribe().then(success => {
      console.debug('unsubscribed', success);
    })
  }

  checkForUpdate() {
    
    console.debug('checkForUpdate');
    this.swUpdate.checkForUpdate().then(u => {
      console.debug('update 3', u);
    }).catch(e => console.error('checkForUpdate failed', e));

  }

}
