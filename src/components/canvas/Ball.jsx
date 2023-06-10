import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);

    return (
        <Float
            speed={1.75}
            rotationIntensity={1}
            floatIntensity={2} 
        >
            <ambientLight intensity={0.25} />
            <directionalLight position={[ 0, 0, 0.25]} />
            <mesh
                castShadow receiveShadow scale={2.25}
            >   
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial 
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={10}
                    flatShading
                />
                <Decal 
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1.2}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    )
}

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop="demand"
            dpr={[1, 2]}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<>...LOading</>}>
                <OrbitControls enableZoom={false}/>
                <Ball imgUrl={icon}/>
            </Suspense>

        </Canvas>
    )
}

export default BallCanvas