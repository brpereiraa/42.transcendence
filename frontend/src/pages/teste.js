export default function teste() {
    setTimeout(() => {
        const canvas = document.getElementById("renderCanvas");
        const engine = new BABYLON.Engine(canvas, true);
        const createScene = function () {
            const scene = new BABYLON.Scene(engine);
            const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 30, -20), scene);
            camera.setTarget(BABYLON.Vector3.Zero());
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
            light.intensity = 0.7;
            const plane = BABYLON.MeshBuilder.CreateBox("box", { size: 5, depth: 0.4, height: 5 }, scene);
            plane.rotation.y = BABYLON.Tools.ToRadians(90);
            plane.position.x = 18;
            const plane1 = BABYLON.MeshBuilder.CreateBox("box", { size: 5, depth: 0.4, height: 5 }, scene);
            plane1.rotation.y = BABYLON.Tools.ToRadians(90);
            plane1.position.x = -18;
            plane.diffuse = new BABYLON.Color3(50, 50, 50);
            const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
            sphere.position.y = 1;
            const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 40, height: 20 }, scene);
            return scene;
        };
        const scene = createScene();
        engine.runRenderLoop(() => {
            scene.render();
        });
        window.addEventListener("resize", () => engine.resize());
    }, 0);
    return `
        <div class="mx-auto w-1/2">
            <canvas id="renderCanvas" width="900" height="500" tabindex="1" class="mx-auto"></canvas>
        </div>
    `;
}
