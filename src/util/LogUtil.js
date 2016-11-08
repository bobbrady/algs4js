import logger from 'winston';

logger.level = process.env.LOG_LEVEL;

/**
 * Class LogUtil
 *
 * Provides a simple Winston stdout logger that has its
 * log level set by the LOG_LEVEL environment variable
 */
class LogUtil {
  /**
   * Static Function getLogger
   *
   * @return {Object} the Winsotn stdout logger
   */
  static getLogger() {
    return logger;
  }
}

export default LogUtil.getLogger();
