import type Ring from './Ring.ts'
import type Chromosome from '#plots/disco/chromosome/Chromosome.ts'
import type Labels from '#plots/disco/label/Labels.ts'
import type SnvArc from '#plots/disco/snv/SnvArc.ts'
import type CnvArc from '#plots/disco/cnv/CnvArc.ts'
import type LohArc from '#plots/disco/loh/LohArc.ts'

export default class Rings {
	labelsRing: Labels
	chromosomesRing: Ring<Chromosome>
	nonExonicArcRing?: Ring<SnvArc>
	snvArcRing?: Ring<SnvArc>
	cnvArcRing?: Ring<CnvArc>
	lohArcRing?: Ring<LohArc>

	constructor(
		labelsRing: Labels,
		chromosomesRing: Ring<Chromosome>,
		nonExonicArcRing?: Ring<SnvArc>,
		snvArcRing?: Ring<SnvArc>,
		cnvArcRing?: Ring<CnvArc>,
		lohArcRing?: Ring<LohArc>
	) {
		this.labelsRing = labelsRing
		this.chromosomesRing = chromosomesRing
		this.nonExonicArcRing = nonExonicArcRing
		this.snvArcRing = snvArcRing
		this.cnvArcRing = cnvArcRing
		this.lohArcRing = lohArcRing
	}
}
