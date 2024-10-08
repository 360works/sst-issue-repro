CREATE TABLE IF NOT EXISTS "application" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userID" uuid,
	"JobNum" text,
	"Status" text NOT NULL,
	"SubmittedDate" date,
	"JobType" text NOT NULL,
	"SharedCompanyName" text,
	"SharedAttn" text,
	"SharedAddress" text,
	"SharedCity" text,
	"SharedState" text,
	"SharedZip" text,
	"SharedPhone" text,
	"SharedCell" text,
	"SharedEmail" text,
	"UtilApEngineeringContact" text,
	"UtilApEngineeringEmail" text,
	"UtilApEngineeringPhone" text,
	"UtilApEngineeringCell" text,
	"UtilApStartDate" timestamp with time zone,
	"UtilApEndDate" timestamp with time zone,
	"IncidentPhone" text,
	"SharedScopeProjectName" text,
	"UtilType1" text,
	"UtilType2" text,
	"UtilType3" text,
	"UtilPipeBridge" boolean,
	"UtilTypeNumOfCarriers" text,
	"SharedLocCity" text,
	"SharedLocCounty" text,
	"SharedLocState" text,
	"SharedLocSection" text,
	"SharedLocTownship" text,
	"SharedLocRange" text,
	"UtilLocStreetName" text,
	"SharedLocBridgeCenterlineNearestCrossing" text,
	"SharedLocDodtNo" text,
	"SharedLocRRSubdivision" text,
	"SharedLocLatitude" text,
	"SharedLocLongitude" text,
	"UtilLocAocDegrees" text,
	"SharedLocCrossMilePost" text,
	"SharedLocParallelBegMilePost" text,
	"SharedLocSpurDist" text,
	"UtilLocDistBridge" text,
	"UtilLocBridgeMP" text,
	"UtilWireLineRadioOption" text,
	"UtilWireLinePowerLineVoltage" text,
	"UtilWireLineOtherDetails" text,
	"UtilWireLineInnerductCt" text,
	"UtilWireLineFibersCt" text,
	"UtilPipeLineVerticalClearance" text,
	"UtilWireLinePolesOnRRProp" text,
	"UtilWireLinePolesHorzDistFromNearestTrack" text,
	"UtilWireLinePolesDistance" text,
	"UtilWireLineCarrierDepthBelowBaseRail" text,
	"UtilWireLineCarrierDepthBelowBottom" text,
	"VarianceWirelineCarrier" boolean,
	"UtilWireLineCarrierWireLength" text,
	"UtilWireLineCarrierUndergroundParallel" text,
	"UtilWireLineCarrierPipeInsideDia" text,
	"UtilWireLineCarrierPipeWallThickness" text,
	"UtilWireLineCarrierPipeMaterial" text,
	"UtilWireLineCarrierMinYieldPt" text,
	"UtilWireLineCarrierJointType" text,
	"UtilPipelineCommodity" text,
	"PipelineTransmission" text,
	"UtilPipelineTranOtherDesc" text,
	"PipelineCommodityState" text,
	"PipelineCommodityFlammable" text,
	"PipelineCommodityProperties" text[],
	"UtilPipelineTypeOtherDetails" text,
	"UtilPipelineTypeDetails" text,
	"UtilPipelineCarrierDepthBelowBase" text,
	"UtilPipelineCarrierDepthBelowBottom" text,
	"VariancePipelineCarrier" boolean,
	"UtilPipelineCarrierLength" text,
	"UtilPipelineCarrierUndergroundParallel" text,
	"UtilPipelineCarrierInsideDia" text,
	"UtilPipelineCarrierWallThick" text,
	"UtilPipelineCarrierMaterial" text,
	"UtilPipelineCarrierMinYieldPt" text,
	"UtilPipelineCarrierJointType" text,
	"UtilPipelineCarrierMaxOperPressure" text,
	"UtilPipelineHydrostaticPressure" text,
	"UtilPipelineProtectiveCoating" boolean,
	"UtilPipelineCarrierProtectiveCoatingType" text,
	"UtilPipelineCarrierCathodicallyProtected" boolean,
	"CasingPipeline" text,
	"UtilPipelineCasingDepthBelowBase" text,
	"UtilPipelineCasingDepthBelowBottom" text,
	"VariancePipelineCasing" text,
	"UtilPipelineCasingLength" text,
	"UtilPipelineCasingUndergroundParallel" text,
	"UtilPipelineCasingInsideDia" text,
	"UtilPipelineCasingWallThick" text,
	"UtilPipelineCasingMaterial" text,
	"UtilPipelineCasingMinYieldPt" text,
	"UtilPipelineCasingJointType" text,
	"UtilPipelineCasingMaxOperPressure" text,
	"UtilPipelineCasingProtectiveCoat" boolean,
	"UtilPipelineCasingProtectiveCoatType" text,
	"UtilPipelineCasingCathodicallyProtected" boolean,
	"UtilPipelineVented" boolean,
	"UtilPiplineVentedDiameter" text,
	"UtilPipelineVentedCount" text,
	"UtilPipelineVentedHeightAboveGround" text,
	"UtilMoiPick" text,
	"UtilMoiOtherDesc" text,
	"UtilExistingAgreement" text,
	"SharedDocPastAgreement" text,
	"UtilExistingAgreeNum" text,
	"UtilExistingDate" timestamp with time zone,
	"ExistingAgreementType" text[],
	"UtilExistingOtherDesc" text,
	"UtilKcsReq" text,
	"UtilKcsReqServiceToBuilding" boolean,
	"UtilKcsReqServiceToSwitch" boolean,
	"UtilKcsReqServiceToSignal" boolean,
	"UtilKcsReqServiceOther" boolean,
	"UtilKcsReqServiceOtherDesc" text,
	"UtilKcsReqContact" text,
	"UtilKcsReqContactPhone" text,
	"UtilKcsReqContactEmail" text,
	"UtilKcsReqProjectName" text,
	"UtilKcsReqAfeNumber" text,
	"SharedSignaturePrinted" text,
	"SharedSignatureTitle" text,
	"SharedSignatureDate" timestamp with time zone,
	"SharedDocDrawing1" text,
	"SharedDocDrawing2" text,
	"SharedDocDrawing3" text,
	"SharedDocDrawing4" text,
	"SharedDocDrawing5" text,
	"RoeScopeDimensionA" text,
	"RoeScopeDimensionB" text,
	"RoeScopePeriodFrom" timestamp with time zone,
	"RoeScopePeriodTo" timestamp with time zone,
	"RoeScopeTypeBridge" boolean,
	"RoeScopeTypeRoadResurface" boolean,
	"RoeScopeTypeSurvey" boolean,
	"RoeScopeTypeDrainage" boolean,
	"RoeScopeTypeUtility" boolean,
	"RoeScopeTypeInspection" boolean,
	"RoeScopeTypeOther" boolean,
	"RoeScopeTypeOtherDesc" text,
	"RoeScopePurpose" text,
	"SharedLocCrossMilePostPlusFt" text,
	"SharedLocParallelBegMilePostPlusFt" text,
	"SharedLocParallelEndMilePost" text,
	"SharedLocParallelEndMilePostPlusFt" text,
	"RoeLocWithin25Ft" text,
	"RoeLocCrossingReq" text,
	"RoeLocCrossingReqMilePost" text,
	"RoeLocCrossingReqMilePostPlusFt" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"cognitoEmail" text NOT NULL,
	"firstName" text,
	"lastName" text,
	"company" text,
	"contactEmail" text,
	"cellPhone" text,
	CONSTRAINT "user_cognitoEmail_unique" UNIQUE("cognitoEmail")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "application" ADD CONSTRAINT "application_userID_user_id_fk" FOREIGN KEY ("userID") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
