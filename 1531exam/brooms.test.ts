import { send_message, get_messages, clear, get_users, add_user } from './brooms';

describe('dryrun', () => {
  test('example', () => {
    clear();
    add_user('Hayden');
    expect(get_users()).toStrictEqual({ users: ['Hayden'] });
    add_user('Rob');
    expect(get_users()).toStrictEqual({ users: ['Rob', 'Hayden'] });
    send_message('Hayden', 'Rob', 'Hello!');
    send_message('Hayden', 'Rob', 'Goodbye!');
    expect(get_messages()).toStrictEqual({
      'messages': [
        { from: 'Hayden', to: 'Rob', message: 'Hello!'},
        { from: 'Hayden', to: 'Rob', message: 'Goodbye!'},
      ],
    });
  });

  test('error', () => {
    clear();
    add_user('Pete');
    expect(() => add_user('Pete')).toThrow(Error);
    expect(() => send_message('Hayden', 'Rob', 'Hello!')).toThrow(Error);
  });

  test('clear', () => {
    clear();
    expect(get_users()).toStrictEqual({ users: [] });
  });
});
