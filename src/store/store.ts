import type { Item } from '@/models/item';
import { nanoid } from 'nanoid';
import { reactive } from 'vue'

export const store: {
  items: Item[]
} = reactive({
  items: [
    {
      id: nanoid(),
      title: 'Fortnite',
      description: 'Create and play with friends for free in Fortnite. Explore games, concerts, live events and more, or be the last player standing in Battle Royale',
      price: 0,
      imgUrl: 'https://cdn2.unrealengine.com/social-image-battlepass-3840x2160-19b42864f188.jpg',
    }]
});