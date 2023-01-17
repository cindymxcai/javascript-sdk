import { Evaluator } from "../evaluator";
import { BinaryOperator } from "./binary";

export class LessThanOrEqualOperator extends BinaryOperator {
	binary(evaluator: Evaluator, lhs: any, rhs: any) {
		const result = evaluator.compare(lhs, rhs);
		return result !== null ? result <= 0 : null;
	}
}