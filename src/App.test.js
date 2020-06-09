import { renderFaces } from './models';

test('renders learn react link', () => {
  const cube = renderFaces();
  expect(cube[0][1]).toBe('#0f0');
});
