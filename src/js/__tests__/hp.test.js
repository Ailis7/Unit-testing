import hpLurking from '../app';

test('should healthy', () => {
  const result = hpLurking({ name: 'anyName', health: 51 });
  expect(result).toBe('healthy');
});

test('should wounded', () => {
  const result = hpLurking({ name: 'anyName', health: 50 });
  expect(result).toBe('wounded');
});

test('should critical', () => {
  const result = hpLurking({ name: 'anyName', health: 14 });
  expect(result).toBe('critical');
});

test('should error', () => {
  const result = hpLurking('anything');
  expect(result).toBe('Error in object anything');
});
