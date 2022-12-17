#!/usr/bin/with-contenv bash

# Escape regex / with \/
function escape {
  echo $1 | sed 's/\//\\\//g'
}

OPRAVLJENEPOTIAPI_URL="$(escape $OPRAVLJENEPOTIAPI_URL)"

if [ -n "$OPRAVLJENEPOTIAPI_URL" ]; then
  sed -i "/window.env.apiOpravljenePotiUrl\s\+=/s/'.*'/'$OPRAVLJENEPOTIAPI_URL'/" /app/assets/environment.js
fi

POLNILNAPOSTAJAAPI_URL="$(escape $POLNILNAPOSTAJAAPI_URL)"

if [ -n "$POLNILNAPOSTAJAAPI_URL" ]; then
  sed -i "/window.env.apiPolnilnaPostajaUrl\s\+=/s/'.*'/'$POLNILNAPOSTAJAAPI_URL'/" /app/assets/environment.js
fi

POTAPI_URL="$(escape $POTAPI_URL)"

if [ -n "$POTAPI_URL" ]; then
  sed -i "/window.env.apiPotUrl\s\+=/s/'.*'/'$POTAPI_URL'/" /app/assets/environment.js
fi

TIPVOZILAPI_URL="$(escape $TIPVOZILAPI_URL)"

if [ -n "$TIPVOZILAPI_URL" ]; then
  sed -i "/window.env.apiTipVozilUrl\s\+=/s/'.*'/'$TIPVOZILAPI_URL'/" /app/assets/environment.js
fi

UPORABNIKIAPI_URL="$(escape $UPORABNIKIAPI_URL)"

if [ -n "$UPORABNIKIAPI_URL" ]; then
  sed -i "/window.env.apiUporabnikiUrl\s\+=/s/'.*'/'$UPORABNIKIAPI_URL'/" /app/assets/environment.js
fi

VOZILAAPI_URL="$(escape $VOZILAAPI_URL)"

if [ -n "$VOZILAAPI_URL" ]; then
  sed -i "/window.env.apiVozilaUrl\s\+=/s/'.*'/'$VOZILAAPI_URL'/" /app/assets/environment.js
fi
