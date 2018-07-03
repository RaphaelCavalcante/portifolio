import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skillName;

  constructor() { }

  ngOnInit() {
  }
  private getSkill() {
    return "devicon-" + this.skillName + "-plain";
  }
}
