import { Component } from '@angular/core';

interface Setting {
  name: string;
  value: boolean;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  settings: Setting[] = [
    { name: 'Enable Notifications', value: true },
    { name: 'Dark Mode', value: false },
    { name: 'Auto-Update', value: true }
  ];

  toggleSetting(setting: Setting): void {
    setting.value = !setting.value;
  }
}
