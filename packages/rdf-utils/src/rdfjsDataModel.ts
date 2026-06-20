/* eslint-disable @typescript-eslint/ban-ts-comment */
// src/utils/rdfjs-data-model-interop.ts
import * as rdfdmNamespace from "@rdfjs/data-model";
import type { Quad } from "@rdfjs/types";
import type {
  SubjectNode,
  ObjectNode,
  PredicateNode,
  GraphNode,
} from "@ldo/rdf-utils";
import { BlankNode, DefaultGraph } from "n3";

// The interop shim
let RdfDataModelResolved;
if (
  // @ts-ignore
  rdfdmNamespace.default &&
  // @ts-ignore
  typeof rdfdmNamespace.default.namedNode === "function"
) {
  // @ts-ignore
  RdfDataModelResolved = rdfdmNamespace.default;
} else {
  RdfDataModelResolved = rdfdmNamespace;
}

export const namedNode: (typeof rdfdmNamespace)["namedNode"] =
  RdfDataModelResolved.namedNode;
export const literal: (typeof rdfdmNamespace)["literal"] =
  RdfDataModelResolved.literal;
export const quad = (
  s: SubjectNode,
  p: PredicateNode,
  o: ObjectNode,
  g?: GraphNode,
): Quad => RdfDataModelResolved.quad(s, p, o, g);
export const blankNode = (value: string): BlankNode =>
  RdfDataModelResolved.blankNode(value);
export const defaultGraph = (): DefaultGraph =>
  RdfDataModelResolved.defaultGraph();
