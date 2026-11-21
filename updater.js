// Spin & Win OTA diagnostics and readiness bootstrap.
import { CapacitorUpdater } from '@capgo/capacitor-updater';

(async () => {
  try {
    const [deviceId, current, next, autoUpdate] = await Promise.all([
      CapacitorUpdater.getDeviceId().catch(() => null),
      CapacitorUpdater.current().catch(() => null),
      CapacitorUpdater.getNextBundle().catch(() => null),
      CapacitorUpdater.isAutoUpdateEnabled().catch(() => null),
    ]);
    console.info('[Spin Win OTA] startup diagnostics', {
      deviceId,
      currentBundle: current,
      nextBundle: next,
      autoUpdateEnabled: autoUpdate,
    });
  } catch (error) {
    console.warn('[Spin Win OTA] diagnostics unavailable', error);
  }

  try {
    const result = await CapacitorUpdater.notifyAppReady();
    console.info('[Spin Win OTA] notifyAppReady succeeded', result);
  } catch (error) {
    console.error('[Spin Win OTA] notifyAppReady failed', error);
  }
})();
