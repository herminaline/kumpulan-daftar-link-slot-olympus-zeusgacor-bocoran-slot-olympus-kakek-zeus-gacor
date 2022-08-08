'use babel';

import KumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorView from './kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-view';
import { CompositeDisposable } from 'atom';

export default {

  kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorView = new KumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorView(state.kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorView.destroy();
  },

  serialize() {
    return {
      kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorViewState: this.kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorView.serialize()
    };
  },

  toggle() {
    console.log('KumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacor was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
