import {selectItem} from './select-item';

describe('transformation', () => {
  it('selects values from owner object', () => {
    let owner = {
      user_id: 15,
      display_name: 'Ipsum'
    }
    expect(selectItem('user', owner)).toEqual({
      value: 15, name: 'Ipsum', type: 'user'
    });
  });

  it('selects values from tag', () => {
    expect(selectItem('tag', 'linux')).toEqual({
      value: 'linux', name: 'linux', type: 'tag'
    });
  });
});
