import { Suspense, VFC } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './BaseSpiderMan';

interface Prop {
    goToStretch: () => void,
}

// const label = {
//     position: 'absolute',
//     padding: '10px 20px',
//     bottom: 'unset',
//     right: 'unset',
//     top: 60,
//     left: 60,
//     maxWidth: 380,
// }

// function HtmlLoader() {
//     return <span style={{ ...label, border: '2px solid #10af90', color: '#10af90' }}>waiting...</span>
// };

const Body: VFC<Prop> = (props) => {
    const { goToStretch } = props

    return (
        <Canvas style={{
            width: "auto",
            height: "90vh",
        }}
        className="bodyCanvas"
        >
            <OrbitControls 
                autoRotate
                enablePan={false} 
                enableZoom={false} 
                maxPolarAngle={2}
                minPolarAngle={0}
            />
    
            <Suspense fallback={null}>
                <Model goToStretch={goToStretch}/>
                <Environment files="/assets/HDR_st05n.hdr" background={false}/>
            </Suspense>
        </Canvas>
    )
};

export default Body
