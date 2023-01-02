# Three.js Starting Template in TypeScript

This is a starting template for three.js projects, inspired by [threejs-template-complex](https://github.com/brunosimon/threejs-template-complex), and based on TypeScript, pnpm and Vite.

## Usage

1. Click `Use this template` button of this page, and generate your own repository

2. git clone to the local machine

```bash
pnpm install
pnpm run dev
```

3. Open the browser to view the result.

![iShot_2023-01-02_15 30 59](https://user-images.githubusercontent.com/37015336/210285217-7dd90919-605a-481c-8a1e-f13ec68bf24a.jpg)

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
