import React, { Suspense, VFC } from 'react';
import { withRouter } from 'react-router-dom'
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './BaseSpiderMan';

const Body: VFC = () => {
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
                <Model />
                <Environment files="/assets/HDR_st05n.hdr" background={false}/>
            </Suspense>
        </Canvas>
    )
};

export default Body
