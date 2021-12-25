import { Suspense, VFC } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './BaseSpiderMan';

interface Prop {
    goToStretch: ({part, body} : {part: string, body: string}) => void
}

const Body: VFC<Prop> = (props) => {
    const { goToStretch } = props

    return (
        <Canvas style={{
            width: "auto",
            height: "90vh",
        }}
        className="bodyCanvas"
        >
            <Suspense fallback={null}>
                <Model goToStretch={({part, body} : {part: string, body: string}) => goToStretch({part , body})}/>
                <Environment files="/assets/evening_meadow_1k.hdr" background={false}/>
            </Suspense>
            
            <OrbitControls 
                autoRotate
                enablePan={false} 
                enableZoom={false} 
                maxPolarAngle={2}
                minPolarAngle={0}
            />
        </Canvas>
    )
};

export default Body