const html = require('choo/html');
const assets = require('../../common/assets');
const modal = require('./modal');

module.exports = function(state, emit) {
  return html`
    <main class="main">
      ${state.modal && modal(state, emit)}
      <section
        class="flex flex-col items-center justify-center h-full w-full p-6 md:p-8 overflow-hidden md:rounded-xl md:shadow-big"
      >
        <h1 class="text-center text-3xl font-bold my-2">
          ${state.translate('expiredTitle')}
        </h1>
        <svg class="text-primary my-12">
          <use xlink:href="${assets.get('notFound.svg')}#svg124" />
        </svg>
      </section>
    </main>
  `;
};
