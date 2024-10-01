import {ILogObj, ISettingsParam, Logger} from "tslog";

/**
 * The logger for the 360Works Cloud is configured here. Settings exist foo controlling levels and adding the ability to upload to a remote service.
 * As of 2/15/2024 This only sets the name. Before we roll out for realsies, we should consider adding a remote service to upload logs to,
 * and at LEAST reducing the logging level in production.
 *
 * Nobody should EVER EVER be using the main logger. It's for the whole app's loggers to share settings. It is not exported on purpose.
 * --wgs
 *
 * Settings description:
 * name: self explanatory
 * minLevel: Min logging level -- Min Level should be silly (0) in dev and info (3) in prod.
 * hideLogPositionForProduction: Whether tslog should gather info about the log code position -- bottom line, this is a performance optimization in prod.
 * stylePrettyLogs: Whether to pretty print logs -- this is to make reading logs in CloudWatch and the SST console easier
 */
const settings: ISettingsParam<ILogObj> = {
	name: "jll-permitting-app",
	minLevel: Boolean(process.env.NEXT_PUBLIC_PROD_ENV) ? 3 : 1,
	hideLogPositionForProduction: Boolean(process.env.NEXT_PUBLIC_PROD_ENV),
	stylePrettyLogs: !Boolean(process.env.NEXT_PUBLIC_PROD_ENV) && !Boolean(process.env.NEXT_PUBLIC_STAGING_ENV)
}
const mainLogger = new Logger<ILogObj>(settings);
const loggers = new Map<string, Logger<ILogObj>>();

/**
 * Get a logger with a specific name. This is useful for creating a logger for a specific module or class.
 * Caches loggers already requested so that we don't create a new one every time.
 *
 * @param name
 */
export const getLogger = (name: string) => {
	if (!loggers.has(name)) {
		loggers.set(name, mainLogger.getSubLogger({name}));
	}
	return loggers.get(name) as Logger<ILogObj>;
}