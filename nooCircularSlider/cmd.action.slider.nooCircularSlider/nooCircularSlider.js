class RangeSlider {
  	constructor(element, settings) {
        this.settings = Object.assign({
            clsCircular: 'c-rng--circular',
            clsCircularOutput: 'c-rng--circular-output',
            clsOutput: 'c-rng__output',
            clsOutputWrapper: 'c-rng--output',
            clsRangeTicks: 'c-rng--ticks',
            clsWrapper: 'c-rng__wrapper',
            offset: -90,
            varPercent: '--rng-percent',
            varPercentUpper: '--rng-percent-upper',
            varThumb: '--rng-thumb-w',
            varUnit: '--rng-unit',
            varValue: '--rng-value'
        }, stringToType(settings));

        this.range = element;
        this.initRange(this.range);
    }

    getRange() {
      return this.range;
    }
  
  	/**
    * @function initRange
    * @param {Node} range
    * @description Initialize: Create elements, add eventListeners etc.
    */
    initRange(range) {
        const circular = this.settings.range.includes('circular');
        range.id = range.id || uuid();

        this.lower = this.settings.range.includes('upper') ? range.parentNode.querySelector(`[data-range*="lower"]`) : null;
        this.max = parseInt(range.max, 10) || 100;
        this.min = parseInt(range.min, 10);
        this.multiplier = 100 / (this.max - this.min);
        this.output = this.settings.range.includes('output') || circular ? document.createElement('output') : null;
        this.ticks = parseInt(range.dataset.ticks, 10);
        this.upper = this.settings.range.includes('lower') ? range.parentNode.querySelector(`[data-range*="upper"]`) : null;
        const isMulti = (this.lower || this.upper);
        this.wrapper = isMulti ? range.parentNode : document.createElement('div');

        /* output */
        if (this.output) {
            this.output.className = circular ? this.settings.clsCircularOutput : this.settings.clsOutput;
            this.output.for = range.id;

            if (isMulti) {
                this.wrapper.insertBefore(this.output, range);
            }
            else {
                this.wrapper.classList.add(circular ? this.settings.clsCircular : this.settings.clsOutputWrapper);
                this.wrapper.appendChild(this.output);
            }
        }

        /* wrapper */
        if (!isMulti) {
            range.parentNode.insertBefore(this.wrapper, range);
            this.wrapper.appendChild(range);
        }
        if (range.dataset.modifier) {
            this.wrapper.classList.add(range.dataset.modifier)
        }

		this.wrapper.style.setProperty('--value-color', range.dataset.valueColor);
      	this.wrapper.style.setProperty('--circle-bgc', range.dataset.backgroundCircleColor);
      	this.wrapper.style.setProperty('--track-bgc', range.dataset.circleColor);
      	this.wrapper.style.setProperty('--track-fill', range.dataset.valueCircleColor);
      	this.wrapper.style.setProperty('--circle-size', range.dataset.size);
      
        this.wrapper.classList.add(this.settings.clsWrapper);
        this.wrapper.style.setProperty(this.settings.varThumb, getComputedStyle(range).getPropertyValue(this.settings.varThumb));

        /* ticks */
        if (this.ticks) {
            const ticks = [...Array(this.ticks).keys()];
            const svg = `
        <svg class="${this.settings.clsRangeTicks}" width="100%" height="100%">
        ${ticks.map((index) => {
                return `<rect x="${(100 / this.ticks) * index}%" y="5" width="1" height="100%"></rect>`
            }).join('')
                }
        <rect x="100%" y="5" width="1" height="100%"></rect>
      </svg>`;
            this.wrapper.insertAdjacentHTML('afterbegin', svg);
        }

        /* circular */
        if (circular) {
            //range.hidden = true;
          	range.style.display = 'none';
            const pointerMove = (event) => { return this.updateCircle(this.rotate(event.pageX, event.pageY)) };
            this.setCenter();
            this.output.setAttribute('tabindex', 0);
            this.output.addEventListener('keydown', (event) => {
                switch (event.key) {
                    case 'ArrowLeft': case 'ArrowDown': event.preventDefault(); this.range.stepDown(); this.updateCircle(); break;
                    case 'ArrowRight': case 'ArrowUp': event.preventDefault(); this.range.stepUp(); this.updateCircle(); break;
                    default: break;
                }
            });
            this.output.addEventListener('pointerdown', () => { return this.output.addEventListener('pointermove', pointerMove) });
            this.output.addEventListener('pointerup', () => { return this.output.removeEventListener('pointermove', pointerMove) });

            this.updateCircle();
        }
        else {
            range.addEventListener('input', () => { return this.updateRange() });
        }

        /* TODO: Send init event ? */
      	range.dispatchEvent(new Event('input'));
    }

    /**
    * @function rotate
    * @param {Number} x
    * @param {Number} y
    * @description  Returns angle from center of circle to current mouse x and y
    */
    rotate(x, y) {
        return Math.atan2(y - this.center.y, x - this.center.x) * 180 / Math.PI
    }

    /**
    * @function setCenter
    * @description Calculates center of circular range
    */
    setCenter() {
        const rect = this.wrapper.getBoundingClientRect();
        this.center = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        }
    }

    /**
    * @function updateCircle
    * @param {Number} start
    * @description  Updates CSS Custom Props/coniuc-gradient when circular-input is modified
    */
    updateCircle(start) {
        let angle = start;
        let rad = 360 / (this.max - this.min);
        //if (!angle) { angle = rad * (this.range.valueAsNumber - this.min) + this.settings.offset; }
      	if (!angle) { angle = rad * this.range.valueAsNumber + this.settings.offset; }
        let end = angle - this.settings.offset;
        if (end < 0) { end = end + 360; }
        if (start) { this.range.value = Math.ceil(end / rad); }
        this.wrapper.dataset.value = this.range.value;
      	this.range.dispatchEvent(new Event('newvalue'));
        this.wrapper.style.setProperty('--angle', `${angle}deg`);
        this.wrapper.style.setProperty('--gradient-end', `${end}deg`);
    }

    /**
    * @function updateRange
    * @description Updates CSS Custom Props when range-input is modified
    */
    updateRange() {
        if (this.lower) { /* Active is `upper` */
            if (this.lower.valueAsNumber > this.range.valueAsNumber) {
                this.range.value = this.lower.valueAsNumber;
                return;
            }
        }
        if (this.upper) { /* Active is `lower` */
            if (this.upper.valueAsNumber < this.range.valueAsNumber) {
                this.range.value = this.upper.valueAsNumber;
                return;
            }
        }

        const value = (this.range.valueAsNumber - this.min) * this.multiplier;
        this.range.style.setProperty(this.settings.varPercent, `${value}%`);
        this.range.style.setProperty(this.settings.varValue, `${this.range.valueAsNumber}`);

        if (this.lower) {
            this.lower.style.setProperty(this.settings.varPercentUpper, `${value}%`);
        }

        if (this.output) {
            this.output.style.setProperty(this.settings.varUnit, `${value}`);
            this.output.innerText = this.range.value;
        }
    }
}

/* Helper methods */
function stringToType(obj) {
    const object = Object.assign({}, obj);
    Object.keys(object).forEach(key => {
        if (typeof object[key] === 'string' && object[key].charAt(0) === ':') {
            object[key] = JSON.parse(object[key].slice(1));
        }
    });
    return object;
}

function uuid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => {
        return (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    }
    );
}