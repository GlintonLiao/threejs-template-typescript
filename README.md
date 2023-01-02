# Three.js Starting Template

## Usage

1. Click `Use this template` button of this page, and generate your own repository

2. git clone to the local machine

```bash
pnpm install
pnpm run dev
```

3. Open the browser to see the result.

## Structure

### World

All models should be added inside `World.ts`

```ts
// setting a model
setDummy(): void {
    this.resources.items.placeholder.encoding = THREE.sRGBEncoding

    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({
            map: this.resources.items.placeholder,
        })
    )
    this.scene.add(cube)
}
```

### Navagation

The template uses `OrbitControl` for the default navigation, for more navigation options, you can visit the docs of the Three.js

### Event and Time

To call a event function such as `resize()`, you can use the `.trigger()` defined in `EventEmitter.ts`.

## License

MIT
