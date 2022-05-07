import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TodoAppComponent extends Component {
  @tracked
  text = '';

  @action
  submit(model, event) {
    event.preventDefault();
    const i = model[model.length - 1].id + 1;
    const newTodo = {
      id: i,
      todo: this.text,
    };
    model.pushObject(newTodo);
    console.log('add', model);
  }

  @action
  onChange(e) {
    this.text = e.target.value;
  }
}
