use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    program_error::ProgramError,
    pubkey::Pubkey,
};

entrypoint!(process_instruction);

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    let account_iter = &mut accounts.iter();
    let account = next_account_info(account_iter)?;

    if account.owner != program_id {
        return Err(ProgramError::IncorrectProgramId);
    }

    // 你的业务逻辑

    Ok(())
}
