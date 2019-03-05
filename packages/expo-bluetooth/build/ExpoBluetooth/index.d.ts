declare const wrappedPlatformModule: {
    [property: string]: any;
};
export default wrappedPlatformModule;
export declare const UUID: any;
export declare const DELIMINATOR = "|";
export declare const EVENTS: {
    UPDATE_STATE: 'UPDATE_STATE';
    SYSTEM_ENABLED_STATE_CHANGED?: 'SYSTEM_ENABLED_STATE_CHANGED';
    CENTRAL_DISCOVERED_PERIPHERAL: 'CENTRAL_DISCOVERED_PERIPHERAL';
    CENTRAL_STATE_CHANGED: 'CENTRAL_STATE_CHANGED';
    PERIPHERAL_CONNECTED: 'PERIPHERAL_CONNECTED';
    PERIPHERAL_DISCONNECTED: 'PERIPHERAL_DISCONNECTED';
    PERIPHERAL_DISCOVERED_SERVICES: 'PERIPHERAL_DISCOVERED_SERVICES';
    PERIPHERAL_BONDED?: 'PERIPHERAL_BONDED';
    PERIPHERAL_UNBONDED?: 'PERIPHERAL_UNBONDED';
    SERVICE_DISCOVERED_CHARACTERISTICS: 'SERVICE_DISCOVERED_CHARACTERISTICS';
    SERVICE_DISCOVERED_INCLUDED_SERVICES: 'SERVICE_DISCOVERED_INCLUDED_SERVICES';
    CHARACTERISTIC_DID_NOTIFY: 'CHARACTERISTIC_DID_NOTIFY';
    CHARACTERISTIC_DID_READ: 'CHARACTERISTIC_DID_READ';
    CHARACTERISTIC_DID_WRITE: 'CHARACTERISTIC_DID_WRITE';
    CHARACTERISTIC_DISCOVERED_DESCRIPTORS: 'CHARACTERISTIC_DISCOVERED_DESCRIPTORS';
    DESCRIPTOR_DID_READ: 'DESCRIPTOR_DID_READ';
    DESCRIPTOR_DID_WRITE: 'DESCRIPTOR_DID_WRITE';
};
