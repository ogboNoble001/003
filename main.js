window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  
  const sliders = document.querySelectorAll('.styled-slider')
  
  sliders.forEach(slider => {
    function updateSliderFill() {
      const min = parseFloat(slider.min) || 0;
      const max = parseFloat(slider.max) || 100;
      const val = parseFloat(slider.value);
      const percent = ((val - min) / (max - min)) * 100;
      slider.style.background = `linear-gradient(to right, #F56565 0%, #F56565 ${percent}%, #2B2F36 ${percent}%, #2B2F36 100%)`;
    }
    
    slider.addEventListener('input', updateSliderFill);
    updateSliderFill();
  });
});