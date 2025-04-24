let currentForeground;
let currentMidground;
let currentBackground;
let currentSky = 'purple-city-sky';
let currentWeather;
let uiColor;

function updateBackground() {
    const bgImages = 
      'url(../assets/' + currentWeather + '.gif), ' +
      'url(../assets/' + currentForeground + '.png), ' +
      'url(../assets/' + currentMidground + '.png), ' +
      'url(../assets/' + currentBackground + '.png), ' +
      'url(../assets/' + currentSky + '.png)';
  
    console.log("Setting background-image to:", bgImages);
  
    $('html').css('background-image', bgImages);

    if (currentSky === 'purple-city-sky') {
        uiColor = '#730079'
    } else if (currentSky === 'blue-mountain-sky') {
        uiColor = '#0B2D3D'
    } else if (currentSky === 'orange-desert-sky') {
        uiColor = '#784600'
    } else if (currentSky === 'pink-cherry-sky') {
        uiColor = '#BC6CC0'
    }

    $('.changeUI').css("background-color", uiColor)
  }

  

$(document).ready(function () {
    setInterval(function() {
        $('#hover').css("display", "none")
    }, 10000)
  // Default
  currentForeground = 'purple-city-foreground';
  currentMidground = 'purple-city-midground';
  currentBackground = 'purple-city-background';
  currentSky = 'purple-city-sky';
  currentWeather = 'raineffect';

  updateBackground();

  // Generic handler
  $('.theme-button').click(function () {
    const type = $(this).data('type');     // foreground, midground, etc.
    const theme = $(this).data('theme');   // city, desert, mountain

    // Update the correct variable
    switch (type) {
      case 'foreground':
        currentForeground = getAssetName(theme, 'foreground');
        break;
      case 'midground':
        currentMidground = getAssetName(theme, 'midground');
        break;
      case 'background':
        currentBackground = getAssetName(theme, 'background');
        break;
      case 'sky':
        currentSky = getAssetName(theme, 'sky');
        break;
      case 'weather':
        currentWeather = getWeatherEffect(theme);
        break;
    }

    updateBackground();
  });

  $('#customize').click(function () {
    $('#customize-menu').toggleClass('show');
  });

  $('#city').click(function () {
    currentForeground = getAssetName('city', 'foreground');
    currentMidground = getAssetName('city', 'midground');
    currentBackground = getAssetName('city', 'background');
    currentSky = getAssetName('city', 'sky');
    currentWeather = getWeatherEffect('city');
    updateBackground();
  });
  
  $('#desert').click(function () {
    currentForeground = getAssetName('desert', 'foreground');
    currentMidground = getAssetName('desert', 'midground');
    currentBackground = getAssetName('desert', 'background');
    currentSky = getAssetName('desert', 'sky');
    currentWeather = getWeatherEffect('desert');
    updateBackground();
  });
  
  $('#mountains').click(function () {
    currentForeground = getAssetName('mountain', 'foreground');
    currentMidground = getAssetName('mountain', 'midground');
    currentBackground = getAssetName('mountain', 'background');
    currentSky = getAssetName('mountain', 'sky');
    currentWeather = getWeatherEffect('mountain');
    updateBackground();
  });

  $('#cherry').click(function () {
    currentForeground = getAssetName('cherry', 'foreground');
    currentMidground = getAssetName('cherry', 'midground');
    currentBackground = getAssetName('cherry', 'background');
    currentSky = getAssetName('cherry', 'sky');
    currentWeather = getWeatherEffect('cherry');
    updateBackground();
  });

  $('#none').click(function() {
    currentWeather = ''
    updateBackground()
  })

  $(function() {
    $("#customize-menu").draggable();
});

$('.x').click(function() {
    $(this).parent().parent().toggleClass('show')
})
  
});

// Helper to build image file names
function getAssetName(theme, layer) {
  let color = '';
  switch (theme) {
    case 'city': color = 'purple'; break;
    case 'desert': color = 'orange'; break;
    case 'mountain': color = 'blue'; break;
    case 'cherry': color = 'pink'; break;
  }
  return `${color}-${theme}-${layer}`;
}

function getWeatherEffect(theme) {
  switch (theme) {
    case 'city': return 'raineffect';
    case 'desert': return 'sandstorm';
    case 'mountain': return 'snoweffect';
    case 'cherry': return 'cherryeffect'
  }
}