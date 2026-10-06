import { hero } from './blocks/hero/hero.js';
import { features } from './blocks/hero/features/features.js';

const renderers = { features, hero };

export function renderBlocks(blocks) {
    return blocks.map((block) => {
        const render = renderers[block.type];

        if(!render) {
            console.warn(`${block.type} does not exists`);
            return '';
        }

        return render(block);
    }).join('');
}
