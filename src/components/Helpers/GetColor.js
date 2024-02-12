/** @format */

export function GetColor(priority) {
  switch (priority) {
    case 'without':
      return {
        color: 'rgba(255, 255, 255, 0.3)',
        name: 'Without priority',
      };
    case 'low':
      return {
        color: 'rgba(143, 161, 208, 1)',
        name: 'Low',
      };
    case 'medium':
      return {
        color: 'rgba(224, 156, 181, 1)',
        name: 'Medium',
      };
    case 'high':
      return {
        color: 'rgba(190, 219, 176, 1)',
        name: 'High',
      };
    default:
      return {
        color: 'rgba(255, 255, 255, 0.3)',
        name: 'Without priority',
      };
  }
}
