

export enum JobTypeEnum {
    utility = "Utility",
    roe = "Right of Entry"
}

export const enum NoYesRadioOptionEnum {
    no = 'No',
    yes = 'Yes',
}

export interface ContactInformationForm {
    sharedCompanyName: string;
    sharedAttn: string;
    sharedAddress: string;
    sharedCity: string;
    sharedState: string;
    sharedZip: string;
    sharedPhone: string;
    sharedCell: string;
    sharedEmail: string;
    utilApEngineeringContact: string;
    utilApEngineeringEmail: string;
    utilApEngineeringPhone: string;
    utilApEngineeringCell: string;
    utilApStartDate: Date | null;
    utilApEndDate: Date | null;
    incidentPhone: string;
}

export const enum UtilType1Enum {
    pipeline = "Pipeline",
    wireline = "Wireline",
}

export const enum UtilType2Enum {
    overhead = "Overhead",
    underground = "Underground",
}

export interface TypeOfEncroachmentForm {
    sharedScopeProjectName: string;
    utilType1: string;
    utilType2: string;
    utilType3: string;
    utilPipeBridge: boolean;
    utilTypeNumOfCarriers: string;
}

export interface LocationForm {
    sharedLocCity: string;
    sharedLocCounty: string;
    sharedLocState: string;
    sharedLocSection: string;
    sharedLocTownship: string;
    sharedLocRange: string;
    utilLocStreetName: string;
    sharedLocBridgeCenterlineNearestCrossing: string;
    sharedLocDodtNo: string;
    sharedLocRRSubdivision: string;
    sharedLocLatitude: string;
    sharedLocLongitude: string;
    utilLocAocDegrees: string;
    sharedLocCrossMilePost: string;
    sharedLocParallelBegMilePost: string;
    sharedLocSpurDist: string;
    utilLocDistBridge: string;
    utilLocBridgeMP: string;
}

export const enum UtilWireLineRadioOptionEnum {
    powerLine = 'Power Line',
    otherSpecify = 'Other (specify)',
    fiberOptic = 'Fiber Optic'
}

export interface WirelineSpecificationForm {
    utilWireLineRadioOption: string;
    utilWireLinePowerLineVoltage: string;
    utilWireLineOtherDetails: string;
    utilWireLineInnerductCt: string;
    utilWireLineFibersCt: string;
    utilPipeLineVerticalClearance: string;
    utilWireLinePolesOnRRProp: string;
    utilWireLinePolesHorzDistFromNearestTrack: string;
    utilWireLinePolesDistance: string;
    utilWireLineCarrierDepthBelowBaseRail: string;
    utilWireLineCarrierDepthBelowBottom: string;
    varianceWirelineCarrier: boolean;
    utilWireLineCarrierWireLength: string;
    utilWireLineCarrierUndergroundParallel: string;
    utilWireLineCarrierPipeInsideDia: string;
    utilWireLineCarrierPipeWallThickness: string;
    utilWireLineCarrierPipeMaterial: string;
    utilWireLineCarrierMinYieldPt: string;
    utilWireLineCarrierJointType: string;
}

export const enum PipelineTransmissionRadioOptionEnum {
    gravity = 'Gravity',
    force = 'Force',
    other = 'Other',
}

export const enum PipelineCommodityStateRadioOptionEnum {
    liquid = 'Liquid',
    gas = 'Gas',
    steam = 'Steam',
}

export const enum PipelineCommodityPropertiesOptionEnum {
    corrosive = 'Corrosive',
    toxic = 'Toxic',
    environmentalHazard = 'Environmental Hazard',
    other = 'Other',
}

export interface PipelineSpecificationForm {
    utilPipelineCommodity: string;
    pipelineTransmission: string;
    utilPipelineTranOtherDesc: string;
    pipelineCommodityState: string;
    pipelineCommodityFlammable: string;
    pipelineCommodityProperties: string[];
    utilPipelineTypeOtherDetails: string;
    utilPipelineTypeDetails: string;
    utilPipelineCarrierDepthBelowBase: string;
    utilPipelineCarrierDepthBelowBottom: string;
    variancePipelineCarrier: boolean;
    utilPipelineCarrierLength: string;
    utilPipelineCarrierUndergroundParallel: string;
    utilPipelineCarrierInsideDia: string;
    utilPipelineCarrierWallThick: string;
    utilPipelineCarrierMaterial: string;
    utilPipelineCarrierMinYieldPt: string;
    utilPipelineCarrierJointType: string;
    utilPipelineCarrierMaxOperPressure: string;
    utilPipelineHydrostaticPressure: string;
    utilPipelineProtectiveCoating: boolean;
    utilPipelineCarrierProtectiveCoatingType: string;
    utilPipelineCarrierCathodicallyProtected: boolean;

    casingPipeline: string;
    utilPipelineCasingDepthBelowBase: string;
    utilPipelineCasingDepthBelowBottom: string;
    variancePipelineCasing: string;
    utilPipelineCasingLength: string;
    utilPipelineCasingUndergroundParallel: string;
    utilPipelineCasingInsideDia: string;
    utilPipelineCasingWallThick: string;
    utilPipelineCasingMaterial: string;
    utilPipelineCasingMinYieldPt: string;
    utilPipelineCasingJointType: string;
    utilPipelineCasingMaxOperPressure: string;
    utilPipelineCasingProtectiveCoat: boolean;
    utilPipelineCasingProtectiveCoatType: string;
    utilPipelineCasingCathodicallyProtected: boolean;
    utilPipelineVented: boolean;
    utilPiplineVentedDiameter: string;
    utilPipelineVentedCount: string;
    utilPipelineVentedHeightAboveGround: string;
}

export const enum UtilMoinPickEnum {
    dryBoreAndJack = "Dry Bore and Jack",
    directionalDrill ="Directional Drill",
    otherSpecify = "Other (specify)",
}

export interface MethodOfInstallationForm {
    utilMoiPick: string;
    utilMoiOtherDesc: string;
}


export interface ExistingAgreementForm {
    utilExistingAgreement: string;
    sharedDocPastAgreement: string;
    utilExistingAgreeNum: string;
    utilExistingDate: Date | null;
    existingAgreementType: string[];
    utilExistingOtherDesc: string;
}

export interface RequestedServiceForm {
    utilKcsReq: string;
    utilKcsReqServiceToBuilding: boolean;
    utilKcsReqServiceToSwitch: boolean;
    utilKcsReqServiceToSignal: boolean;
    utilKcsReqServiceOther: boolean;
    utilKcsReqServiceOtherDesc: string;
    utilKcsReqContact: string;
    utilKcsReqContactPhone: string;
    utilKcsReqContactEmail: string;
    utilKcsReqProjectName: string;
    utilKcsReqAfeNumber: string;
}

export interface FeesAndAcceptanceForm {
    sharedSignaturePrinted: string;
    sharedSignatureTitle: string;
    sharedSignatureDate: Date | null;
}

export interface DrawingsForm {
            sharedDocDrawing1: string
            sharedDocDrawing2: string
            sharedDocDrawing3: string
            sharedDocDrawing4: string
            sharedDocDrawing5: string
}

// ROE

export interface ContractorInformationROEForm {
    sharedCompanyName: string;
    sharedAttn: string;
    sharedAddress: string;
    sharedCity: string;
    sharedState: string;
    sharedZip: string;
    sharedPhone: string;
    sharedCell: string;
    sharedEmail: string;
}

export interface ScopeOfWorkROEForm {
    sharedScopeProjectName: string;
    roeScopeDimensionA: string;
    roeScopeDimensionB: string;
    roeScopePeriodFrom: Date | null;
    roeScopePeriodTo: Date | null;
    roeScopeTypeBridge: boolean;
    roeScopeTypeRoadResurface: boolean;
    roeScopeTypeSurvey: boolean;
    roeScopeTypeDrainage: boolean;
    roeScopeTypeUtility: boolean;
    roeScopeTypeInspection: boolean;
    roeScopeTypeOther: boolean;
    roeScopeTypeOtherDesc: string;
    roeScopePurpose: string;
}

export interface LocationROEForm {
    sharedLocCity: string;
    sharedLocCounty: string;
    sharedLocState: string;
    sharedLocSection: string;
    sharedLocTownship: string;
    sharedLocRange: string;
    sharedLocDodtNo: string;
    sharedLocRRSubdivision: string;
    sharedLocBridgeCenterlineNearestCrossing: string;
    sharedLocLatitude: string;
    sharedLocLongitude: string;
    sharedLocCrossMilePost: string;
    sharedLocCrossMilePostPlusFt: string;
    sharedLocParallelBegMilePost: string;
    sharedLocParallelBegMilePostPlusFt: string;
    sharedLocParallelEndMilePost: string;
    sharedLocParallelEndMilePostPlusFt: string;
    sharedLocSpurDist: string;
    utilLocDistBridge: string;
    utilLocBridgeMP: string;
    roeLocWithin25Ft: string;
    roeLocCrossingReq: string;
    roeLocCrossingReqMilePost: string;
    roeLocCrossingReqMilePostPlusFt: string;
}

export interface ApplicationForm extends
    ContactInformationForm,
    TypeOfEncroachmentForm,
    LocationForm,
    WirelineSpecificationForm,
    PipelineSpecificationForm,
    MethodOfInstallationForm,
    ExistingAgreementForm{
    id: string;
}