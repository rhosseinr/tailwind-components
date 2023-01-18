function mouseOut(e: any, tooltip: any) {
  e.preventDefault();
  e.stopPropagation();
  if (tooltip) {
    tooltip.classList.remove('dorsa-tooltip-active');
    tooltip.classList.add('dorsa-tooltip-fade-out');
  }
}

function mouseOver(event: any, tooltip: any) {
  event.preventDefault();
  event.stopPropagation();
  if (tooltip) {
    // eslint-disable-next-line no-param-reassign
    tooltip.innerHTML = event.currentTarget?.getAttribute('data-tooltip');
    tooltip.classList.remove('dorsa-tooltip-fade-out');
    tooltip.classList.add('dorsa-tooltip-active');
    let x = event.x - Math.round(tooltip.offsetWidth / 2);
    let y = event.y + 20;
    if (x < 0) x = event.x + 5;
    if (x + tooltip.offsetWidth > window.innerWidth) {
      x = window.innerWidth - tooltip.offsetWidth;
    }
    if (y + tooltip.offsetHeight > window.innerHeight) {
      y = event.y - (tooltip.offsetHeight + 10);
    }
    // eslint-disable-next-line no-param-reassign
    tooltip.style.left = `${x}px`;
    // eslint-disable-next-line no-param-reassign
    tooltip.style.top = `${y}px`;
  }
}

export default function buildTooltip() {
  const tooltip = document.getElementById('tooltip-container');
  setTimeout(() => {
    const allTooltip = document.querySelectorAll('[data-tooltip]');
    allTooltip.forEach((item) => {
      item.removeEventListener('mouseover', (e) => mouseOver(e, tooltip));
      item.removeEventListener('mouseout', (e) => mouseOut(e, tooltip));
      item.removeEventListener('mousedown', (e) => mouseOut(e, tooltip));
      item.addEventListener('mouseover', (e) => mouseOver(e, tooltip), true);
      item.addEventListener('mouseout', (e) => mouseOut(e, tooltip), true);
      item.addEventListener('mousedown', (e) => mouseOut(e, tooltip), true);
      item.removeAttribute('title');
    });
  }, 50);
}
