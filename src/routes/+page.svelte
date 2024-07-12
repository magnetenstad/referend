<script lang="ts">
	import type { Note } from '$lib/pages.svelte';
	import { pages } from '$lib/pages.svelte';

	let dragFrom: {
		page: Note;
		pageX: number;
		pageY: number;
		mouseX: number;
		mouseY: number;
		id: string;
	} | null = null;
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	style="position: relative; width: 100svw; height: 100svh"
	on:mousemove={(e) => {
		if (dragFrom) {
			dragFrom.page.x = dragFrom.pageX + (e.screenX - dragFrom.mouseX);
			dragFrom.page.y = dragFrom.pageY + (e.screenY - dragFrom.mouseY);
		}
	}}
	on:mouseup={() => {
		dragFrom = null;
	}}
>
	{#each pages as page}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			style="position: absolute; padding: 1em; border: 1px solid black; border-radius: 4px; display: flex; flex-direction: column; gap: 0.5em;"
			style:left={page.x + 'px'}
			style:top={page.y + 'px'}
			on:mousedown={(e) => {
				dragFrom = {
					page,
					pageX: page.x,
					pageY: page.y,
					mouseX: e.screenX,
					mouseY: e.screenY,
					id: page.id
				};
			}}
		>
			{page.id} at ({page.x}, {page.y})
			<textarea bind:value={page.content}></textarea>
		</div>
	{/each}
</div>
