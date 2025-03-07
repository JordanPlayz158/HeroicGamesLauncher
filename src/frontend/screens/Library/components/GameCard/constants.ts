import { Runner } from 'common/types'
import fallbackImage from 'frontend/assets/heroic_card.jpg'

export function getImageFormatting(cover: string, runner: Runner) {
  const imageBase = cover
  if (imageBase === 'fallback') {
    return fallbackImage
  }
  if (runner === 'legendary') {
    return `${imageBase}?h=400&resize=1&w=300`
  } else {
    return imageBase
  }
}

export function getCardStatus(
  status: string | undefined,
  isInstalled: boolean,
  layout: string
) {
  const isInstalling =
    status === 'installing' || status === 'updating' || status === 'extracting'
  const isUpdating = status === 'updating'
  const isReparing = status === 'repairing'
  const isMoving = status === 'moving'
  const isPlaying = status === 'playing'
  const isQueued = status === 'queued'
  const isUninstalling = status === 'uninstalling'
  const notAvailable = status === 'notAvailable'
  const notSupportedGame = status === 'notSupportedGame'
  const syncingSaves = status === 'syncing-saves'
  const isLaunching = status === 'launching'
  const isInstallingUbisoft = status === 'ubisoft'

  const haveStatus =
    isMoving ||
    isReparing ||
    isInstalling ||
    isUpdating ||
    isQueued ||
    isUninstalling ||
    notAvailable ||
    notSupportedGame ||
    isPlaying ||
    syncingSaves ||
    isLaunching ||
    isInstallingUbisoft ||
    (isInstalled && layout !== 'grid')
  return {
    isInstalling,
    notSupportedGame,
    isUninstalling,
    isQueued,
    isPlaying,
    notAvailable,
    isUpdating,
    isLaunching,
    isInstallingUbisoft,
    haveStatus
  }
}
